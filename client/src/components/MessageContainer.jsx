import Messages from "./Messages";
import { BsSend } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const nochatSelected = false;
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {nochatSelected ? (
                <NoChatSelected />
            ) : <div className="md:min-w-[450px] flex flex-col">
                <>
                    <div className="bg-slate-500 px-4 py-2 mb-2">
                        <span className="label-text">To:</span>
                        <span className="text-gray-900 font-bold">Sruthi</span>
                    </div>
                    <Messages />
                    <form className="px-4 my-3">
                        <div className="w-full relative">
                            <input type="text" className="border text-sm rounded-lg black w-full p-2.5 bg-gray-700 border-gray-600 text-white" placeholder="send message" />
                            <button className="absolute inset-y-0 end-0 flex items-center pe-3" type="submit">
                                <BsSend />
                            </button>
                        </div>
                    </form>
                </>

            </div>
            }
        </div>

    );
};

export default MessageContainer;


const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome Sharad</p>
                <p>select a chat to message</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}