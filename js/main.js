//flagpicker in form.
        var input = document.querySelector("#personid");
        window.intlTelInput(input);

// Progress bar.
        var progressIcons = document.getElementById("progress-template").innerHTML;
        var template = Handlebars.compile(progressIcons);
        var progressData = template({ steps: [
        {color: 'green', symbol:'&#10004;', title: 'Select service'},
        {color: 'green', symbol:'&#10004;', title: 'Service overview'},
        {color: 'green', symbol:'&#10004;', title: 'Billing information'},
        {color: 'orange', symbol:'4', title: 'General information'},
        {color: 'gray', symbol:'5', title: 'Choose signer'},
        {color: 'gray', symbol:'6', title: 'Review'},  
        ] });
        document.getElementById('progressData').innerHTML += progressData;

// All accounts in general info.
        var accounts = document.getElementById("users-template").innerHTML;
        var template = Handlebars.compile(accounts);
        var genInfoPeople = template({ users: [
        {name: 'Jonas', surname: 'Jonaitis', id: '1236589657895', position: 'Account', email: 'j.jonaitis@dokobit.lt', country: 'lt'},
        {name: 'Petras', surname: 'Petraitis', id: '1236589657895', position: 'Account', email: 'p.petrulionis@dokobit.lt', country: 'ee'},
        {name: 'Ona', surname: 'Onuliavičienė', id: '1236589657895', position: 'Account', email: 'j.onuliaviciene@dokobit.lt', country: 'is'},
        {name: 'Jonas', surname: 'Kazimieraitis', id: '1236589657895', position: 'Account', email: 'j.jonaitis@dokobit.lt', country: 'lt'},
        {name: 'Tomas', surname: 'Toluliavičiauskas', id: '1236589657895', position: 'Account', email: 'j.jonaitis@dokobit.lt', country: 'is'},
        ] });
        document.getElementById('genInfoPeople').innerHTML += genInfoPeople;

// All accounts in general info.
        var languages = document.getElementById("language-template").innerHTML;
        var template = Handlebars.compile(languages);
        var genFlag = template({ langs: [
                {flag: 'gb', language: 'English', state: '' },
                {flag: 'lt', language: 'Lietuviškai', state: 'selected' },
                {flag: 'ee', language: 'Eesti keel', state: '' },
                {flag: 'is', language: 'Íslenska', state: '' },
        ] });
        document.getElementById('language').innerHTML += genFlag;     