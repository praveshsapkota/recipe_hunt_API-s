import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime' | 'Decimal'

// Prisma model type definitions
interface PrismaModels {
  Account: Prisma.Account
  Session: Prisma.Session
  User: Prisma.User
  VerificationToken: Prisma.VerificationToken
  RECIPE: Prisma.RECIPE
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'oauth_token_secret' | 'oauth_token' | 'user'
      ordering: 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'oauth_token_secret' | 'oauth_token' | 'user'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
      ordering: 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'password' | 'accounts' | 'sessions' | 'billing' | 'address' | 'contactNumber' | 'varified' | 'role' | 'status' | 'recipe'
      ordering: 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'password' | 'accounts' | 'sessions' | 'billing' | 'address' | 'contactNumber' | 'varified' | 'role' | 'status' | 'recipe'
    }
    verificationTokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'identifier' | 'token' | 'expires'
      ordering: 'identifier' | 'token' | 'expires'
    }
    recipes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'slug' | 'thumbImage' | 'ImgGallery' | 'ingrediants' | 'cookingSteps' | 'cookingTime' | 'stars' | 'notes' | 'userId' | 'user'
      ordering: 'id' | 'name' | 'slug' | 'thumbImage' | 'ImgGallery' | 'ingrediants' | 'cookingSteps' | 'cookingTime' | 'stars' | 'notes' | 'userId' | 'user'
    }
  },
  Account: {

  }
  Session: {

  }
  User: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'oauth_token_secret' | 'oauth_token' | 'user'
      ordering: 'id' | 'userId' | 'type' | 'provider' | 'providerAccountId' | 'refresh_token' | 'access_token' | 'expires_at' | 'token_type' | 'scope' | 'id_token' | 'session_state' | 'oauth_token_secret' | 'oauth_token' | 'user'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
      ordering: 'id' | 'sessionToken' | 'userId' | 'expires' | 'user'
    }
    recipe: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'slug' | 'thumbImage' | 'ImgGallery' | 'ingrediants' | 'cookingSteps' | 'cookingTime' | 'stars' | 'notes' | 'userId' | 'user'
      ordering: 'id' | 'name' | 'slug' | 'thumbImage' | 'ImgGallery' | 'ingrediants' | 'cookingSteps' | 'cookingTime' | 'stars' | 'notes' | 'userId' | 'user'
    }
  }
  VerificationToken: {

  }
  RECIPE: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    account: 'Account'
    accounts: 'Account'
    session: 'Session'
    sessions: 'Session'
    user: 'User'
    users: 'User'
    verificationToken: 'VerificationToken'
    verificationTokens: 'VerificationToken'
    recipe: 'RECIPE'
    recipes: 'RECIPE'
  },
  Mutation: {
    createOneAccount: 'Account'
    updateOneAccount: 'Account'
    updateManyAccount: 'AffectedRowsOutput'
    deleteOneAccount: 'Account'
    deleteManyAccount: 'AffectedRowsOutput'
    upsertOneAccount: 'Account'
    createOneSession: 'Session'
    updateOneSession: 'Session'
    updateManySession: 'AffectedRowsOutput'
    deleteOneSession: 'Session'
    deleteManySession: 'AffectedRowsOutput'
    upsertOneSession: 'Session'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneVerificationToken: 'VerificationToken'
    updateOneVerificationToken: 'VerificationToken'
    updateManyVerificationToken: 'AffectedRowsOutput'
    deleteOneVerificationToken: 'VerificationToken'
    deleteManyVerificationToken: 'AffectedRowsOutput'
    upsertOneVerificationToken: 'VerificationToken'
    createOneRECIPE: 'RECIPE'
    updateOneRECIPE: 'RECIPE'
    updateManyRECIPE: 'AffectedRowsOutput'
    deleteOneRECIPE: 'RECIPE'
    deleteManyRECIPE: 'AffectedRowsOutput'
    upsertOneRECIPE: 'RECIPE'
  },
  Account: {
    id: 'String'
    userId: 'String'
    type: 'String'
    provider: 'String'
    providerAccountId: 'String'
    refresh_token: 'String'
    access_token: 'String'
    expires_at: 'Int'
    token_type: 'String'
    scope: 'String'
    id_token: 'String'
    session_state: 'String'
    oauth_token_secret: 'String'
    oauth_token: 'String'
    user: 'User'
  }
  Session: {
    id: 'String'
    sessionToken: 'String'
    userId: 'String'
    expires: 'DateTime'
    user: 'User'
  }
  User: {
    id: 'String'
    name: 'String'
    email: 'String'
    emailVerified: 'DateTime'
    image: 'String'
    password: 'String'
    accounts: 'Account'
    sessions: 'Session'
    billing: 'String'
    address: 'String'
    contactNumber: 'String'
    varified: 'Boolean'
    role: 'User_role'
    status: 'User_status'
    recipe: 'RECIPE'
  }
  VerificationToken: {
    identifier: 'String'
    token: 'String'
    expires: 'DateTime'
  }
  RECIPE: {
    id: 'String'
    name: 'String'
    slug: 'String'
    thumbImage: 'String'
    ImgGallery: 'String'
    ingrediants: 'String'
    cookingSteps: 'String'
    cookingTime: 'String'
    stars: 'Decimal'
    notes: 'String'
    userId: 'String'
    user: 'User'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Account: Typegen.NexusPrismaFields<'Account'>
  Session: Typegen.NexusPrismaFields<'Session'>
  User: Typegen.NexusPrismaFields<'User'>
  VerificationToken: Typegen.NexusPrismaFields<'VerificationToken'>
  RECIPE: Typegen.NexusPrismaFields<'RECIPE'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  