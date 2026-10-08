import React from "react";



function Login() {

    const listEmail = [
    "test@gmail.com",
    "admin@gmail.com",
    "marwa@gmail.com"
];

    const handleChange = (e) => {
        const email = e.target.value;

        const res = listEmail.find((el) => el === email)

        console.log(res ?"email correct " : "email incorect");
    };
    


    return(
        <div>
            <h1>Login</h1>

            <input
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                
             />
           
        </div>
    )
}

export default Login