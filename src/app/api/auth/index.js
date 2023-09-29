// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "@/middleware/connection"
import authSchema from "@/models/auth"
async function handler(req, res) {
    const { username, password } = req?.body

    const data = await authSchema.findOne({ username: username, password: password })
    if (data) {
        res.status(200).json({
            status: true,
            message: "Login Success",
            token: username
        })
    } else {
        res.status(409).json({
            status: false,
            message: "Login failed"
        })
    }
}

export default connectDB(handler)
// export default handler