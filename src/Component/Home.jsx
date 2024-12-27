import LinkButton from "./LinkButton";

const Home = () => {
    return (
        <>
            <div className="min-h-screen h-fit w-full bg-slate-500 flex justify-center items-center flex-col gap-6">
                <h1 className="font-bold text-xl  text-white sm:text-2xl">Practice ReactDoc</h1>
                <LinkButton title={"Counter"} routepath={"/counter"}/>
                <LinkButton title={"Tic-Tac-Toe"} routepath={"/tictacteo"}/>
                <LinkButton title={"Product by Json"} routepath={"/productjson"}/>
            </div>
        </>
    )
}
export default Home;