interface SoftwareEngineer {

}


interface Frontend extends SoftwareEngineer {
    react: ()=>void
}

interface Backend extends SoftwareEngineer {
    express: ()=>void

}

interface Devops extends SoftwareEngineer {
    jenkins: ()=>void
}