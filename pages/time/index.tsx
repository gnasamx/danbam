import Layout from "@/components/layout";

function TimeIndex() {
  return (
    <div className="mb-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
      Time
    </div>
  );
}

TimeIndex.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TimeIndex;
