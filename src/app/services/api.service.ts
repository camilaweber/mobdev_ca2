import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    // getEpisodes() {
    //     return this.http.get(`https://stormy-island-64764.herokuapp.com/assets/episode.json/assets/episodes`)
    // }

    getEpisodes() {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
    }

    // getEpisode(id) {
    //    return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
    // }

    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
    }

       // getCharacters() {
    //     return this.http.get(`https://stormy-island-64764.herokuapp.com/assets/episode.json/assets/characters`)
    // }

    getCharacters() {
        return this.http.get(`https://www.breakingbadapi.com/api/characters`)
    }

    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
    }

    getQuotes() {
        return this.http.get(`https://breakingbadapi.com/api/quotes`)
    }

    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)


    }

    getDeaths() {
        return this.http.get(`https://stormy-island-64764.herokuapp.com/assets/episode.json/api/deaths`)

    }
    getDeath(id) {
        return this.http.get(`https://breakingbadapi.com/api/deaths/${id}`)
    }
}
