import RecentWorksDefault from "./recentWorks/RecentWorksDefault";
import RecentWorksFitness from "./recentWorks/RecentWorksFitness";
import RecentWorksLawyer from "./recentWorks/RecentWorksLawyer";
import RecentWorksMusician from "./recentWorks/RecentWorksMusician";
import RecentWorksSoftwareEngineer from "./recentWorks/RecentWorksSoftwareEngineer";
import RecentWorksWritter from "./recentWorks/RecentWorksWritter";
const RecentWorks = ({ user }) => {
  switch (user) {
    case "trainer":
      return <RecentWorksFitness />;
    case "lawyer":
      return <RecentWorksLawyer />;
    case "writer":
      return <RecentWorksWritter />;
    case "musician":
      return <RecentWorksMusician />;
    case "software_engineer":
      return <RecentWorksSoftwareEngineer />;
    default:
      return <RecentWorksDefault />;
  }
};
export default RecentWorks;
