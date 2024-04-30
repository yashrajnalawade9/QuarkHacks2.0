import React from "react";
import SingleCard from "./SingleCard";

const Chat = () => {
  return (
    <>
            <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
                <div className="container">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <SingleCard
                    CardTitle="Get yourself help with our AI CHATBOT for mental health"
                    btnHref="/chatbot"
                    CardDescription="this chatbot will be your ai buddy so feel free to open yourself with what do you will"
                    Button="View Details"
                    />
                    <SingleCard
                    CardTitle="Always best to have a expert counselling "
                    btnHref="/recommendation"
                    CardDescription="we have some of the best tharepists across the nation to help you out with there specialization"
                    Button="View Details"
                    />
                    <SingleCard
                    CardTitle="Task recommended to help your emotions"
                    btnHref="/task"
                    CardDescription="based on your conversation with our ai bot we have few sets of task recommended to you, we encourage you to try them out"
                    Button="View Details"
                    />
                </div>
                </div>
            </section>
    </>
  );
};

export default Chat;


