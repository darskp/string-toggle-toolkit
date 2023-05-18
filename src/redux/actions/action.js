const increment = (string) => {
    return {
        type: "INCRE",
        payload: string
    }
}
export default increment;
