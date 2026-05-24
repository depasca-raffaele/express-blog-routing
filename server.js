import express from 'express';
import postsRouter from './routers/posts.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.get('/', (request, response) => {
    response.json({message: 'Server del blog attivo' });
});
app.use('/posts', postsRouter);


const posts = [
    {
        titolo: 'Benvenuti nel blog dei cani',
        contenuto: 'In questo spazio parleremo di razze, cure e curiosita sul mondo canino.',
        immagine: '/img/img-cane-1.jpg',
        tags: ['cani', 'blog', 'intro']
    },
    {
        titolo: 'Le 5 razze piu affettuose',
        contenuto: 'Una selezione di cani noti per il loro carattere dolce e socievole.',
        immagine: '/img/cani-da-lavoro.jpeg',
        tags: ['razze', 'famiglia', 'consigli']
    },
    {
        titolo: 'Passeggiate quotidiane: quanto durano?',
        contenuto: 'Scopri come adattare durata e intensita delle uscite in base all eta del cane.',
        immagine: '/img/img-cane-passeggio.webp',
        tags: ['passeggiate', 'attivita', 'salute']
    },
    {
        titolo: 'Alimentazione corretta per il tuo cane',
        contenuto: 'Linee guida base su porzioni, frequenza dei pasti e ingredienti da evitare.',
        immagine: '/img/cibo-secco-per-cani.jpg',
        tags: ['alimentazione', 'benessere', 'veterinario']
    },
    {
        titolo: 'Giochi intelligenti per cani energici',
        contenuto: 'Idee semplici per stimolare mente e corpo del tuo cane anche in casa.',
        immagine: '/img/giochi-cane.jpg',
        tags: ['giochi', 'addestramento', 'energia']
    }
];

app.get('/bacheca', (request, response) => {
    response.json({posts});
});


app.listen(3000, (error) => {
    if (error) {
        console.error('server error');
    } else {
        console.log("server live");
    }
})