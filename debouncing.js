let counter = 0;

const getData = () => {
    // Calls an API and gets Data()
    console.log("Fetching Data...", ++counter);
};

const debounce = (fn, delay) => {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => { fn.apply(context, args); }, delay);
        // timer = setTimeout(() => { fn(); }, delay);
    };
};

const betterFunction = debounce(getData, 800);

// Suppose I'm developing a search bar for Flipkart. If I'm calling an API on every keystroke, the server is going to have a lot of API requests,
// This is undesirable. Hence using debouncing. Debouncing is a programming practise that ensures that time-consuming tasks do not fire so often, that they stall the performance of the web.
// Similar Definition: Debouncing is a programming practise in which a function is called only if a specific time has elapsed since its previous call.