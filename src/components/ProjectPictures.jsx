
const pictures = [
    {
    id: 0,
    title: "Retshjælpen Rusk",
    imageSrc: "/projectPics/ru.png",
    link: "https://rusk-website.vercel.app/",
    description: "Website for Retshjælpen Rusk, a non-profit organization that helps people with legal issues."
  },
  {
    id: 1,
    title: "Anglerfish",
    imageSrc: "/projectPics/an.png",
    link: "https://anglerfish-kappa.vercel.app/",
    description: "A social media platform for anglers to share their catches, tips, and experiences."
  },
  {
    id: 2,
    title: "Oskar Peitersen Photo",
    imageSrc: "/projectPics/os.png",
    link: "https://gus-gallery.github.io/ozzy_home/",
    description: "Photography portfolio website made for a good friend of mine."
  },
  {
    id: 3,
    title: "gw.læder",
    imageSrc: "/projectPics/gw.png",
    link: "https://gus-gallery.github.io/gwl-der_site/",
    description: "Website made for my personal bespoke leather goods business."
  },
  {
    id: 4,
    title: "Nordfor Byggerådgivning",
    imageSrc: "/projectPics/no.png",
    link: "https://gus-gallery.github.io/nordfor_byg/",
    description: "Website created for a private construction consultant."
  },
];

const ProjectCard = ({ title, imageSrc, link, description }) => {
  return (
    <div href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-left justify-left gap-2 cursor-pointer bg-black/20 p-4">
      <h2 className="text-sm md:text-md text-primary font-semibold">{title}</h2>
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        <p className="text-sm md:text-md font-light text-left">{description}</p>
    </div>
  )
}

const ProjectPictures = () => {
  return (
    <div>
        <div className="grid grid-cols-1 gap-4">
            {pictures.map((picture) => (
                <ProjectCard
                    key={picture.id}
                    title={picture.title}
                    imageSrc={picture.imageSrc}
                    link={picture.link}
                    description={picture.description}
                />
            ))}
        </div>
    </div>
  )
}

export default ProjectPictures