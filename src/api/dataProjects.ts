interface ILinks {
    link: string;
    icon: string;
    color: string;
    name?: undefined;
}

interface ITecnologies {
    color: string;
    icon: string;
    name: string;
}

interface IProjects {
    id: number;
    title: string;
    technologies: ITecnologies[];
    links: ILinks[];
    description: string;
}


export const projects:IProjects[] = [
    {
      id: 1,
      title: 'Emestone landing page --- Freelancer',
      technologies: [
        {
          color: '--cor:#e03e36;',
          icon: 'fa-brands fa-html5',
          name: 'HTML'
        },
        {
          color: '--cor:#264DE4;',
          icon: 'fa-brands fa-css3',
          name: 'CSS'
        },
        {
          color: '--cor:#f0d800;',
          icon: 'fa-brands fa-square-js',
          name: 'JAVASCRIPT'
        }
      ],
      links: [
        {
          link: 'https://github.com/Gefferson-Souza/emestone-teste',
          icon: 'fa-brands fa-github',
          color: ''
        },
        {
          link: 'https://emestone.com.br',
          icon: 'fa-solid fa-link',
          color:''
        }
      ],
      description: 'Landing page para a empresa Emestone, desenvolvida com HTML, CSS e Javascript.'
    }
  ]