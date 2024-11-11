"use server";

export async function handleLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const user = {email, password};
    //console.log(user);
    const request = await fetch("http://localhost:4000/api/users/login", {body: JSON.stringify(user), method: "POST", headers: {
        "Content-Type": "application/json",
    }});
    const response = await request.json();
    //console.log(response);
    //console.log(formData);
}