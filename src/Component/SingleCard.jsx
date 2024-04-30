import { Link } from "react-router-dom";

function SingleCard(props){
    return (
      <>
        {/*  */}
        <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
          <div className="p-8  sm:p-9 md:p-7 xl:p-9">
            <h3 className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                {props.CardTitle}
            </h3>
            <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
              {props.CardDescription}
            </p>
  
            <Link className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6" to={props.btnHref}>
                {props.Button}
            </Link>
          </div>
        </div>
      </>
    );
};

export default SingleCard