window.addEventListener('load', () => {
    doMap();
    doFilter();
    doReduce();
    doForEach();
});

const doMap = () => {
    const url = "https://reqres.in/api/users?page=2";

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log('doMap:');
            console.log(response.data.map(person => {
                return {
                    name: person.first_name,
                    email: person.email
                }
            }));
        })
}

const doFilter = () => {
    const url = "https://reqres.in/api/users?page=2";

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log('doFilter');
            console.log(response.data.filter(person => {
                return person.id > 10 && person.first_name === "George";
            }));
        })
}

const doReduce = () => {
    const url = 'https://reqres.in/api/unknown';

    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log('doReduce:');
            console.log(response.data.reduce((accumulator, current) => {
                return accumulator + current.year;
            }, 0))
        })
}

const doForEach = () => {
    const url = 'https://reqres.in/api/users?page=2';

    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log('doForEach:');
        console.log(response.data.map(person => {
            return person.first_name.concat(' ', person.last_name)
        }))
    })
}