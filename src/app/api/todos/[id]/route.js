import { getItem, putItem } from "@/utils/dynamodb"

// get a speicific todo e.g. id 1
export async function GET(req) {
    const todoId = req.nextUrl.pathname.split("/").reverse()[0]
    const todo = await getItem(todoId)
    return Response.json(todo)
}

// update a specific todo e.g. id 1
export async function PUT(req) {
    const id = req.params.id
    const body = await req.json()
    console.log(body)
}

// delete a specific todo e.g id 1
export async function DELETE(req) {
    const id = req.params.id
    const body = await req.json()
    console.log(body)
}