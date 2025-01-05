import { Component, OnInit } from '@angular/core';
import { CvService, CvLine } from '../cv.service';
import {FormsModule} from '@angular/forms'; // Importer le service et le type CvLine

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cvLines: CvLine[] = []; // Tableau pour stocker les lignes de CV
  newLineTitle: string = '';

  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.loadCvData(); // Charger les lignes au démarrage
  }

  // Récupérer les données du backend
  loadCvData() {
    this.cvService.getCvData().subscribe(
      (data) => {
        this.cvLines = data; // Mettre à jour le tableau des lignes avec les données récupérées
      },
      (error) => {
        console.error('Erreur lors de la récupération des lignes:', error);
      }
    );
  }

  // Ajouter une nouvelle ligne
  addLine() {
    if (this.newLineTitle.trim()) {
      this.cvLines.push({ id: '', title: this.newLineTitle }); // Ajouter une nouvelle ligne (id vide pour l'instant)
      this.newLineTitle = ''; // Réinitialiser le champ du formulaire

      // Envoyer les nouvelles données au backend
      this.sendCvData();
    }
  }

  // Envoyer les lignes de CV au backend
  sendCvData() {
    this.cvService.postCvData(this.cvLines).subscribe(
      (response) => {
        console.log('Lignes envoyées avec succès:', response);
      },
      (error) => {
        console.error('Erreur lors de l\'envoi des lignes:', error);
      }
    );
  }
}
