import { permissions } from '../permissions'
import dotenv from 'dotenv'
import { UploadImage } from "../utils/s3"
import { sign, verify } from "jsonwebtoken"
import { User } from "../schema/User/type"
import { recipe } from "../schema/Recipes/type"
import path from "path"
// import {} from "next-auth"
import {
    makeSchema,
    objectType,
    asNexusMethod,
    queryType,
    nonNull,
    stringArg,
    list,
} from 'nexus'
import { DateTimeResolver } from 'graphql-scalars'
import { nexusPrisma } from 'nexus-plugin-prisma'
import { GraphQLUpload } from "graphql-upload"
// import { generateUploadUrl } from '../utils/s3'
import { compare, hash } from 'bcryptjs'
import { applyMiddleware } from 'graphql-middleware'


dotenv.config()
export const DateTime = asNexusMethod(DateTimeResolver, 'date')

const Query_type = queryType({
    definition(t) {
        t.crud.user()
        t.crud.recipes()
    },
})

const Mutation_type = objectType({
    name: 'Mutation',
    definition(t) {
        t.crud.createOneUser()
        t.crud.createOneRECIPE()
        t.crud.updateOneRECIPE()
        t.crud.deleteOneRECIPE()
    }
})

const AuthPayload = objectType({
    name: 'AuthPayload',
    definition(t) {
        t.string('token')
        t.field('user', { type: 'User' })
    },
})


export const schemaWithoutPermissions = makeSchema({
    types: [
        Query_type,
        Mutation_type,
        User,
        recipe,
        DateTime,
    ],
    plugins: [
        nexusPrisma({
            experimentalCRUD: true,
            // shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
            outputs: {
                // We need it in src because production build will crash at tsc compiling
                typegen: __dirname + '/typegenNexusPluginPrisma.d.ts',
            },
            paginationStrategy: 'prisma',
        }),
    ],
    shouldGenerateArtifacts: true,
    outputs: {
        schema: path.join(__dirname, '..', '/src/generated', 'schema.graphql'),
        typegen: path.join(__dirname, '..', '/src/generated', 'nexus-typegen.ts'),
    },
    contextType: {
        module: require.resolve('../context1.ts'),
        export: 'Context',
    },
    sourceTypes: {
        modules: [
            {
                module: '@prisma/client',
                alias: 'prisma',
            },
        ],
    },
})

export const schema = applyMiddleware(schemaWithoutPermissions, permissions)
