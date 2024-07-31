export const EventProps = () => {
    const handleUser = (user) => {
        alert(`Hey, ${user}`)
    }
    const handleHover = () => {
        alert(`hey thanks for hovering me`);
    }
    return (
        <>
            <WelcomeUser
                onClick={() => handleUser("Shayan")}
                onMouseEnter={handleHover}
            />
        </>
    )
}
const WelcomeUser = (props) => {
    return (
        <>
            <button onClick={props.onClick}>Click Me</button>
            <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
        </>
    )
}