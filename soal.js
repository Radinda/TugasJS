
let  paragraph1 = `A Git Workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner. Git workflows encourage users to leverage Git effectively and consistently.Git offers a lot of flexibility in how users manage changes.Given Git's focus on flexibility, there is no standardized process on how to interact with Git. When working with a team on a Git managed project, it’s important to make sure the team is all in agreement on how the flow of changes will be applied. To ensure the team is on the same page, an agreed upon Git workflow should be developed or selected. There are several publicized Git workflows that may be a good fit for your team. Here, we’ll be discussing some of these workflow options.
The array of possible workflows can make it hard to know where to begin when implementing Git in the workplace.This page provides a starting point by surveying the most common Git workflows for software teams. As you read through, remember that these workflows are designed to be guidelines rather than concrete rules. We want to show you what’s possible, so you can mix and match aspects from different workflows to suit your individual needs.`
.toLowerCase();
let paragraph2 = `Before the developer can publish their feature, they need to fetch the updated central commits and rebase their changes on top of them. This is like saying, “I want to add my changes to what everyone else has already done.” The result is a perfectly linear history, just like in traditional SVN workflows.`
.toLowerCase();

let Arrayparagraph1 = Array.from(paragraph1);
let Arrayparagraph2 = Array.from(paragraph2);

let ArrAbjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 


for (let i = 0; i < Arrayparagraph1.length; i++) {

    let cekAbjad = false;

    if(Arrayparagraph1[i] == "."){
        if (Arrayparagraph1[i+1] != " ") {
            for (let x = 0; x < ArrAbjad.length; x++) {
                if (Arrayparagraph1[i+1] == ArrAbjad[x]) {
                    cekAbjad = true;
                }  
            }

        }
    }
    if (cekAbjad == true) {
        Arrayparagraph1[i+1] = " " + Arrayparagraph1[i+1];
    }
}

Arrayparagraph1[0] = Arrayparagraph1[0].toUpperCase();

for (let j = 1; j < Arrayparagraph1.length; j++) {
    if(Arrayparagraph1[j] == "." && j != Arrayparagraph1.length-1){
        if(Arrayparagraph1[j+1] == " "){
            Arrayparagraph1[j+2] = Arrayparagraph1[j+2].toUpperCase();
        }
        else if(Arrayparagraph1[j+2] == " "){
            Arrayparagraph1[j+3] = Arrayparagraph1[j+3].toUpperCase();
        }
        else{
            Arrayparagraph1[j+1] = Arrayparagraph1[j+1].toUpperCase();
        }
    }
}

for (let i = 0; i < Arrayparagraph2.length; i++) {

    let cekAbjad = false;

    if(Arrayparagraph2[i] == "."){
        if (Arrayparagraph2[i+1] != " ") {
            for (let x = 0; x < ArrAbjad.length; x++) {
                if (Arrayparagraph2[i+1] == ArrAbjad[x]) {
                    cekAbjad = true;
                }  
            }

        }
    }
    if (cekAbjad == true) {
        Arrayparagraph2[i+1] = " " + Arrayparagraph2[i+1];
    }
}

Arrayparagraph2[0] = Arrayparagraph1[0].toUpperCase();

for (let j = 1; j < Arrayparagraph2.length; j++) {
    if(Arrayparagraph2[j] == "." && j != Arrayparagraph2.length-1){
        if(Arrayparagraph2[j+1] == " "){
            Arrayparagraph2[j+2] = Arrayparagraph2[j+2].toUpperCase();
        }
        else if(Arrayparagraph1[j+2] == " "){
            Arrayparagraph2[j+3] = Arrayparagraph2[j+3].toUpperCase();
        }
        else{
            Arrayparagraph2[j+1] = Arrayparagraph2[j+1].toUpperCase();
        }
    }
}



console.log(Arrayparagraph1.join(""));
