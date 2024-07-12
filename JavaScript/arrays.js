const circle={
    radius:2,
    drawpicture()
    {
        console.log('drawpicture');
    }
};
for(let entry of Object.entries(circle))
    console.log(entry);