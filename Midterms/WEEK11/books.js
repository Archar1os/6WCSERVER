const books = Vue.createApp({
    data(){
        return {
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Smith Romero',
            year:2008
    }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
});
books.mount("#books");