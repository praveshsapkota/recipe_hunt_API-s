import { objectType } from "nexus"

export const User = objectType({
    name: "User",
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.email()
        t.model.address()
        t.model.billing()
        t.model.role()
        t.model.status()
        t.model.contactNumber()
        t.model.image()
    }
})

// export  const userSignUp = objectType({
//     name: "User",
//     definition(t) {
//         t.model.id()
//         t.model.name()
//         t.model.password()
//         t.model.email()
//         t.model.address()
//         t.model.billing()
//     }
// })