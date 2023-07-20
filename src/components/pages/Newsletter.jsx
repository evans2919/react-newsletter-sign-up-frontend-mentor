import ListITem from "../ListItem";
import NewsLetterForm from "../NewsLetterForm";
import IllustrationMobile from "../images/IllustrationMobile";
import IllustrationDesktop from "../images/IllustrationDesktop";
const Newsletter = () => {
    return (
        <>
            <div className="md:flex md:flex-row-reverse md:bg-gray-50 md:rounded-2xl md:p-5 md:items-center md:justify-between">
                <div>
                    <IllustrationMobile className="w-full md:hidden" />
                    <IllustrationDesktop className="hidden md:block" />
                </div>
                <div className="md:py-10 md:w-1/2">
                    <div className="px-8 pt-6">
                        <div className="mb-6">
                            <h1 className="text-4xl font-bold pb-6 text-gray-800 md:text-5xl">
                                Stay updated!
                            </h1>
                            <p>
                                Join 60,000+ product managers receiving monthly
                                updates on:
                            </p>
                        </div>
                        <ListITem
                            listText={
                                "Product discovery adn building what matters"
                            }
                        ></ListITem>
                        <ListITem
                            listText={
                                "Measuring to ensure updates are a success"
                            }
                        ></ListITem>
                        <ListITem listText={"And much more!"}></ListITem>
                    </div>

                    <NewsLetterForm />
                </div>
            </div>
        </>
    );
};

export default Newsletter;
