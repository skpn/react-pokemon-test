import Layout from "@/components/layout/Layout";
import BlueComponent from "@/components/test-css/BlueComponent/BlueComponent";
import RedComponent from "@/components/test-css/RedComponent/RedComponent";
import ScssComponent from "@/components/test-css/ScssComponent";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <div className="test">
      <p className="text-blue-600">this uses a tailwind blue class</p>
    </div>

    <RedComponent />
    <BlueComponent />
    <ScssComponent />
  </Layout>
);

export default AboutPage;
