import RestWave from "restwave";

const app = new RestWave();

app.get("/", (req, res) => {
	res.json("home page");
});

app.get("/user", (req, res) => {
	res.json({ name: "adarsh", lastName: "shahi" });
});

app.listen(3000, () => {
	console.log("server started at port 3000");
});
