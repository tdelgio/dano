const tattoos = [
  {
    id: 1,
    title: "Tattoo1",

    description: "",
    url: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Tattoo2",

    description: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjvtXpzK5eB4ISfu_8nyMpcgkgIakV8JCNQ&usqp=CAU",
  },
  {
    id: 3,
    title: "Tattoo3",

    description: "",
    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vV5liNTOUr0THNxxZWG_v1AzVaOgPzyzPA&usqp=CAU`,
  },
  {
    id: 4,
    title: "Tattoo4",

    description: "",
    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRKWh2jwo-yJT8e9nOgLFLJMFy6v19ODw2g&usqp=CAU`,
  },
  {
    id: 5,
    title: "Tattoo5",

    description: "",
    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR53vaoutgWGRlhvlGaQZhyMhhZKnahiMmog&usqp=CAU`,
  },
  {
    id: 6,
    title: "Tattoo6",

    description: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmNY1D-_RLsnx6TQdPXaxCPCqMRbkC_PJGQ&usqp=CAU",
  },
  {
    id: 7,
    title: "Tattoo7",

    description: "",
    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtV3KE2WNYN0StmwuS4Kd8vZ4zlFRcD8yEw&usqp=CAU`,
  },
  {
    id: 8,
    title: "Tattoo8",

    description: "",
  },
  {
    id: 9,
    title: "Tattoo9",

    description: "",
    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocfPrvftGCx0iKas1qZl5f3hVNs4ztnW9tw&usqp=CAU`,
  },
]

export const getTattoos = new Promise(resolve => {
  setTimeout(() => {
    resolve(tattoos)
  }, 2000)
})
