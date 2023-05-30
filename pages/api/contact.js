export default function ContactHandler(req, res) {
  console.log("req", req.body);
  res.status(200).redirect("/");
}
