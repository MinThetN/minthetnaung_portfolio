export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
  gitRepo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    image: '/images/ecommerce.jpeg',
    description: 'An eCommerce app where users can view products, add them to cart, complete purchases, and enjoy a responsive UI.',
    technologies: ['Nextjs', 'Typescript', 'TailwindCss', 'Sanity', 'Stripe'],
    link: 'https://fullstack-ecommerce-amber.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/ecommerce'
  },
  {
    id: 2,
    title: 'Mini Social',
    image: '/images/m_social.jpeg',
    description: 'A social app for posting, reacting, commenting, and profile customization with a responsive UI.',
    technologies: ['Nextjs', 'Typescript', 'Tailwind CSS', 'Prisma', 'Clerk'],
    link: 'https://m-social.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/mySocial'
  },
  {
    id: 3,
    title: 'To Do List',
    image: '/images/to_do_list.png',
    description: 'A task management app with day/night themes, letting users create, update, and organize tasks with a clean, responsive UI.',
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
    link: 'https://todo-list-taupe-xi.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/todo-list'
  },
  {
    id: 4,
    title: 'Food Recipes',
    image: '/images/food_recipes.png',
    description: 'Discover, search with filtering system, and explore a diverse range of recipes with detailed instructions and images.',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    link: 'https://food-recipes-gray.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/food_recipes'
  },
  {
    id: 5,
    title: 'Memory Game',
    image: '/images/memory_game.png',
    description: 'A card game where players press the start button to begin and try to match pairs of cards within 50 seconds.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    link: 'https://memory-game-mocha.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/memory-game'
  }
];

// Function to get all projects
export const getAllProjects = (): Project[] => {
  return projects;
};

// Function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Function to get projects by technology
export const getProjectsByTechnology = (technology: string): Project[] => {
  return projects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};