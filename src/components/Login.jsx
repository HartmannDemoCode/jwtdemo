import { login } from '../../facade'
function LogIn() {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target
        const formObject = Object.fromEntries(new FormData(form));
        console.log(formObject);
        login(formObject.username, formObject.password);
    }


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User Name" id="username" name="username"/>
        <input type="text" placeholder="Password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default LogIn