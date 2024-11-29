import { Component } from '@angular/core';
import { ExperienceService } from './services/experience.service';
import { ProfileService } from './services/profile.service';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimeCircleComponent } from './components/time-circle/time-circle.component';
import { SkillsService } from './services/skills.service';

@Component({
    selector: 'cv-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      RouterModule,
      TranslateModule,
      TimeCircleComponent
    ]
})
export class AppComponent {

  public cvInfo$: Observable<any>;
  public edad: number = Math.floor(
    (
      new Date().getTime() - new Date('1987-03-05').getTime()
    )/(
      1000 * 60 * 60 * 24 * 365.25
    ));

  public locale: string;

  constructor(
    private skillsService: SkillsService,
    private experienceService: ExperienceService,
    private profileService: ProfileService,
    private translate: TranslateService
  ) {
    this.locale = 'es-MX';
    this.cvInfo$ = this.translate.onLangChange.pipe(
      switchMap((langChangeEvent: LangChangeEvent) => {
        const currentLang = langChangeEvent.lang;
        this.locale = currentLang;
        return forkJoin({
          profile: this.profileService.getProfile(currentLang),
          jobs: this.experienceService.getJobs(currentLang).pipe(
            map((jobs) => jobs.map(job => ({
              ...job,
              end: job.end ? job.end : new Date().toISOString()
            })))
          ),
          freelances: this.experienceService.getFreelances(currentLang).pipe(
            map((freelances) => freelances.map(freelance => ({
              ...freelance,
              end: freelance.end ? freelance.end : new Date().toISOString()
            })))
          ),
          education: this.experienceService.getEducacion(currentLang),
          skills: this.skillsService.getSkills(currentLang)
        });
      })
    );
    this.translate.use('es-MX');
  }

  public toggleLanguage(): void {
    if (this.translate.currentLang === 'en-US') {
      this.translate.use('es-MX');
    } else {
      this.translate.use('en-US');
    }
  }
}
