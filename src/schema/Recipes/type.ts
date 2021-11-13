import { objectType } from "nexus"

export const recipe = objectType({
    name: "RECIPE",
    definition(t) {
        t.model.id()
        t.model.name()
        t.model.slug()
        t.model.thumbImage()
        t.model.ImgGallery()
        t.model.ingrediants()
        t.model.cookingSteps()
        t.model.cookingTime()
        t.model.notes()
        t.model.stars()
    }
})