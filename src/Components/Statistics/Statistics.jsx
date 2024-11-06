import { Helmet } from "react-helmet";

const Statistics = () => {
  return (
    <div>
      <Helmet>
            <title>Gadget Heaven - Statistics</title>
            <meta name="description" content="Statistics"/>
        </Helmet>
      <div className="text-center bg-default-color text-white py-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">Statistics</h1>
        <p className="mb-8 max-w-[800px] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <h1 className="text-3xl font-bold mb-4">
          Now I am not working on this page. <br />
          That does not mean I not gonna do it letter. <br /> If I survived!
        </h1>
      </div>
    </div>
  );
};

export default Statistics;
