# fantastic-engine
Hiring test project
=======
- Installare l'immagine di Redis da Docker Hub
- Avviare il container con `docker run -d --name redis -p 127.0.0.1:6379:6379` redis da un qualsiasi terminale
- Installare yarn
- Eseguire `yarn install` da un qualsiasi terminale nelle cartelle 'main' e 'satellite'
- Creare file .env nelle cartelle 'main' e 'satellite' ed inserire i seguenti valori:
- 'main' -> `MONGO_URI1=mongodb+srv://admin:Sul0HDKv0cPvaHpN@cluster0.utvrtkg.mongodb.net/?retryWrites=true&w=majority`
- 'satellite' -> `MONGO_URI2=mongodb+srv://admin:QKD03cKsuHTjerFY@cluster0.fufq1la.mongodb.net/?retryWrites=true&w=majority`
- Eseguire `yarn start` da un qualsiasi terminale nelle cartelle 'main' e 'satellite'
- Aprire la pagina `index.html` nella cartella 'frontend' per inviare il messaggio
- Controllare il risultato attraverso una qualsiasi connessione a MongoDB. La più semplice è attraverso MongoDB Compass
>>>>>>> 556c33c32f7145e55dddb6c92bcb75647e51295a
