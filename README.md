# QDS Repository

### Getting Started

To begin, you'll need to install both [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/) on your machine.

Git is a version control system that allows you to track changes in your code and collaborate with others. Node.js includes npm, the Node package manager, which we'll use to manage project dependencies.

Once you've installed git and Node.js, you're ready to clone the repository and set up the project.

If you want to edit code on your local machine, open your terminal and clone this repository first:
```bash
git clone https://github.com/Sophistiqq/Desktop-Electron.git
```

_tip: It's best for you to pick where you want to clone the Repository e.g Desktop or Documents is a good directory_
```bash
cd Desktop
```

### Installing Dependencies and Running the App

To install the necessary dependencies for the app, run:
```bash
npm install
```

To start the app, run:
```bash
npm start
```

### Editing and Creating Features

You need to create a branch on your local repository by using the command:
```bash
git checkout -b feature
```

_tip: you can also be specific and not limited to 'feature', you can also put 'newpage' instead._  

After you have edited something and want to save it to our online repository for checking, you need to use the following commands to add all edited files into staging and then commit those changes:
```bash
git add .
git commit -m "Insert your changes information here"
```

**Remember** that this is still not saved in the repository online, but rather this is your checkpoint if you want to continue further into editing. When you mess up, you can go back by using the command:
```bash
git reset --hard HEAD
```

#### Pushing/Saving the files you have in your machine into this online Repository

If you're sure that your code is ready for saving, you can use this command to push the code you have edited in your local repo into our online repo by using this command:  
```bash
git push origin feature
```
_replace 'feature' with your own branch name_
