import useAuth from "../../../Hooks/UseAuth";


const UserHome = () => {
    const {User} = useAuth()
    console.log(User)
    return (
        <div>
            <h1>This is user home</h1>
            <h1 className="text-3xl">Hello , Welcome 
            {User?.displayName ? User?.displayName : 'Back'}
            
            </h1>
        </div>
    );
};

export default UserHome;