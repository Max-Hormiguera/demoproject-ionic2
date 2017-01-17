let projects = [
    {
        name: "Manhattan Project",
        desc: "What have we done?"
    },
    {
        name: "Mission Impossible",
        desc: "This message will self-destruct in..."
    },
    {
        name: "Project Lazarus",
        desc: "This is SS Normandy, awaiting docking procedures."
    }
];


export let findAll = () => new Promise((resolve, reject) => {
    resolve(projects);
});

export let findByName = (name) => new Promise((resolve, reject) => {
    let filtered = projects.filter(projects => (projects.name).toLowerCase().indexOf(name.toLowerCase()) > -1);
    resolve(filtered);
});

export let findById = (id) => new Promise((resolve, reject) => {
    resolve(projects[id-1]);
});
