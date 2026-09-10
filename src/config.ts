export const siteConfig = {
  name: "Ryo Ide",
  title: "SciML Researcher · Physics-Informed Machine Learning",
  description:
    "Portfolio of Ryo Ide — Physics & Data Science researcher at UC San Diego specializing in Scientific Machine Learning and Physics-Informed Neural Networks.",
  accentColor: "#4f46e5",
  social: {
    email: "ride@ucsd.edu",
    orcid: "https://orcid.org/0009-0009-3387-9078",
    github: "https://github.com/ri2658",
  },
  aboutMe:
    "I'm a Physics and Data Science student at UC San Diego researching scientific machine learning, physics-aware deep learning, and computational physics. My work spans PINN and neural-operator surrogates for thermal simulation, characteristic-aligned operators for transport-dominated PDEs, and MCMC-based analysis of lattice field theory — with published research in AI Interpretability and on Computational Physics. I'm looking for roles in SciML research, physics-informed ML, or quantitative research, where rigorous math meets real systems.",
  skills: [
    "PINNs",
    "Neural Operators",
    "SciML",
    "MCMC",
    "PDE Modeling",
    "Numerical Methods",
    "Spectral Methods",
    "PyTorch",
    "NumPy",
    "Optuna",
    "Transformers",
    "Python",
    "Java",
    "FastAPI",
    "TypeScript",
  ],
  projects: [
    {
      name: "UniverseLab",
      dateRange: "Jul 2026 - Present",
      description:
        "Simulated Sun-Earth-Moon three-body dynamics in pure Python with a symplectic leapfrog integrator that removed Euler's energy drift; implemented Metropolis-Hastings MCMC from scratch to recover an exoplanet's mass from noisy radial-velocity data; self-guided passion project.",
      links: [{ label: "Code", url: "https://github.com/ri2658/UniverseLab" }],
      skills: ["Python", "Numerical Methods", "MCMC"],
    },
    {
      name: "SKLearn Under the Hood",
      dateRange: "Oct 2025 - Dec 2025",
      description:
        "Re-implemented PCA, k-means, EM, and regularized regression from scratch in NumPy with a FastAPI and React/TypeScript frontend; awarded 3rd Place at DinoCage, UCSD's Data Science Student Society hackathon.",
      links: [
        { label: "Website", url: "https://ml-under-the-hood-site.vercel.app/" },
      ],
      skills: ["NumPy", "FastAPI", "React", "TypeScript"],
    },
    {
      name: "Adversarial Robustness for Deep Learning-based Wildfire Prediction",
      dateRange: "Jul 2024 - Jan 2025",
      description:
        "Built WARP, the first model-agnostic adversarial robustness evaluation method for wildfire smoke detectors (YOLOv8n vs RT-DETR). Global Gaussian noise cut transformer mAP to 86.5% vs 50.8% for CNN; adversarial inputs reversed ~50% of smoke detections. Published in Fire.",
      links: [
        { label: "Paper", url: "https://doi.org/10.3390/fire8020050" },
        { label: "Code", url: "https://github.com/ri2658/WARP" },
      ],
      skills: ["Adversarial Robustness", "YOLOv8", "RT-DETR"],
    },
  ],
  experience: [
    {
      company: "Bucket Labs",
      links: [{ label: "Website", url: "https://www.bucketlabs.ai/" }],
      title: "Engineering Intern",
      dateRange: "Jun 2026 - Aug 2026",
      bullets: [
        "Built PINN and ResGRU surrogates for PC thermal simulation; Optuna hyperparameter tuning reduced RMSE from 20 to 4",
        "Identified and fixed data-leakage bugs in a physics-informed neural operator; rebuilt the pipeline to achieve a fair 0.75°C RMSE",
        "Conducted causal ablation study; concluded Performer attention added no real gain (+2.5%) and removed it to reduce model complexity",
      ],
      skills: [
        "PINNs",
        "Neural Operators",
        "PyTorch",
        "Optuna",
        "Thermal Simulation",
        "Semiconductors",
      ],
    },
    {
      company: "Prof. Tajana Rosing Lab / SEELab, UC San Diego",
      links: [{ label: "Lab site", url: "https://seelab.ucsd.edu/" }],
      title: "Undergraduate Researcher",
      dateRange: "Apr 2026 - Present",
      bullets: [
        "Developing characteristic-aligned neural operators for transport-dominated PDEs in fluid dynamics, learning only the residual kernel left after known transport is removed",
        "Derived approximation lower bounds linking kernel rank to transport separation; experimentally showed effective kernel rank grew O(1) for characteristic-aligned architectures versus sub-quadratic growth for generic kernel methods",
      ],
      skills: [
        "Neural Operators",
        "PDEs",
        "Fluid Dynamics",
        "Approximation Theory",
        "Python",
        "PyTorch",
      ],
    },
    {
      company: "Prof. Javier Duarte Lab, UC San Diego",
      links: [
        { label: "Lab site", url: "https://jduarte.physics.ucsd.edu/" },
        { label: "Preprint", url: "https://arxiv.org/abs/2605.01145" },
        { label: "Conference", url: "https://zenodo.org/records/21056890" },
      ],
      title: "Undergraduate Researcher",
      dateRange: "Feb 2026 - Present",
      bullets: [
        "Characterized regime-dependent failures of independence-based models in lattice φ⁴ theory: sampled fields via Metropolis-Hastings MCMC and benchmarked Fourier, PCA, and normalizing-flow representations",
        "Quantified mode coupling growth of ~3x (C: 0.06 to 0.2), defining 3 regimes for when nonlinear models are needed; released as an arXiv preprint and presented at the 2026 Conference on Physics and AI, Stanford",
      ],
      skills: [
        "MCMC",
        "Lattice Field Theory",
        "Normalizing Flows",
        "PCA",
        "Statistical Mechanics",
        "Python",
      ],
    },
    {
      company: "National Science Foundation REU Program",
      links: [
        {
          label: "Program",
          url: "https://www.nsf.gov/awardsearch/show-award/?AWD_ID=1950485&HistoricalAwards=false",
        },
      ],
      title: "Research Intern",
      dateRange: "Jun 2023 - Jul 2023",
      bullets: [
        "Trained computer vision transformers (WS-DETR, D-DETR) for wildfire detection using a Docker-containerized environment",
      ],
      skills: [
        "Computer Vision",
        "Transformers",
        "DETR",
        "Docker",
        "PyTorch",
      ],
    },
  ],
  education: [
    {
      school: "University of California, San Diego",
      degree: "B.S., Data Science and Physics",
      dateRange: "Senior",
      achievements: [
        "Provost Honors",
        "Relevant Coursework: Scientific Machine Learning, Theoretical Machine Learning, Statistical Mechanics, Classical Mechanics, Differential Equations, Linear Algebra, Probability Theory, Vector Calculus",
        "Excellence in Computer Science and Mathematics Award, IBM (March 2025)",
        "Regeneron ISEF Finalist, Society for Science (May 2024)",
      ],
    },
  ],
};
