interface Article {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  content: string; // ✅ Tambahkan properti content
}

export const articles: Article[] = [
  {
    category: "Jobs",
    date: "22 Mar 2024",
    title: "Hire a crew Cruise Ship Jobs",
    description:
      "If you are looking for a job on a cruise ship, you are in the right place. We have a list of available jobs on cruise ships.",
    image: "/images/crew/1.jpeg",
    slug: "hire-a-crew",
    content: `
        <p>Working on a cruise ship can be both exciting and rewarding. You'll have the opportunity to travel the world while gaining valuable work experience.</p>
        <h2>1. Application Process</h2>
        <p>Start by researching the available positions and ensure your resume highlights relevant experience. Certifications in hospitality or maritime safety are a plus.</p>
        <h2>2. Life on Board</h2>
        <p>Expect to work long hours, but enjoy benefits like free accommodation and meals. The multicultural environment allows you to meet people from all over the world.</p>
        <h2>3. Career Advancement</h2>
        <p>Many cruise lines offer opportunities for promotion. With dedication, you can move up the ranks from entry-level positions to supervisory roles.</p>
      `
  },
  {
    category: "Jobs",
    date: "22 Mar 2024",
    title: "Hire a crew Chef",
    description:
      "If you are looking for a job on a cruise ship, you are in the right place. We have a list of available jobs on cruise ships.",
    image: "/images/crew/2.jpeg",
    slug: "hire-a-crew-chef",
    content: `
        <p>Being a chef on a cruise ship is a unique experience, combining culinary skills with the excitement of traveling.</p>
        <h2>1. Culinary Expertise</h2>
        <p>Ensure your skills cover various international cuisines. Cruise lines value chefs who can cater to diverse passenger preferences.</p>
        <h2>2. Kitchen Operations</h2>
        <p>You’ll be responsible for maintaining high food safety standards and working efficiently under pressure.</p>
        <h2>3. Perks of the Job</h2>
        <p>Enjoy opportunities to visit exotic destinations while honing your culinary abilities in a dynamic environment.</p>
      `
  },
  {
    category: "Jobs",
    date: "22 Mar 2024",
    title: "Hire a crew Mechanic",
    description:
      "If you are looking for a job on a cruise ship, you are in the right place. We have a list of available jobs on cruise ships.",
    image: "/images/crew/3.jpeg",
    slug: "hire-a-crew-mechanic",
    content: `
        <p >As a mechanic on a cruise ship, your role is crucial in ensuring the smooth operation of the vessel’s machinery.</p>
        <h2>1. Maintenance Duties</h2>
        <p>You'll be responsible for the regular maintenance of engines, generators, and other mechanical systems.</p>
        <h2>2. Emergency Repairs</h2>
        <p>Be prepared to handle emergency repairs and troubleshoot mechanical issues as they arise during voyages.</p>
        <h2>3. Technical Skills</h2>
        <p>A strong background in marine engineering and technical certifications are essential for this position.</p>
      `
  },
  {
    category: "Jobs",
    date: "22 Mar 2024",
    title: "Hire a crew Mechanic",
    description:
      "If you are looking for a job on a cruise ship, you are in the right place. We have a list of available jobs on cruise ships.",
    image: "/images/crew/3.jpeg",
    slug: "hire-a-crew-mechanic",
    content: `
        <p >As a mechanic on a cruise ship, your role is crucial in ensuring the smooth operation of the vessel’s machinery.</p>
        <h2>1. Maintenance Duties</h2>
        <p>You'll be responsible for the regular maintenance of engines, generators, and other mechanical systems.</p>
        <h2>2. Emergency Repairs</h2>
        <p>Be prepared to handle emergency repairs and troubleshoot mechanical issues as they arise during voyages.</p>
        <h2>3. Technical Skills</h2>
        <p>A strong background in marine engineering and technical certifications are essential for this position.</p>
      `
  }
];
