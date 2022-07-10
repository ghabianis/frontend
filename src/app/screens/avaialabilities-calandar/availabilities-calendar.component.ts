import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import PerfectScrollbar from 'perfect-scrollbar';
import {AbstractRestService} from "../../services/genericservice";
import {Availability} from "../../models/Availability";
import {FormControl, FormGroup, Validators} from "@angular/forms";

declare const $: any;

@Component({
    selector: 'app-avaialabilities-calandar',
    templateUrl: './availabilities-calendar.component.html',
    styleUrls: ['./availabilities-calendar.component.css']
})
export class AvailabilitiesCalendarComponent implements OnInit {
    formGroup !: FormGroup;
    private availabilityId !: number;

    constructor(private service: AbstractRestService<Availability>) {
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            'dateTimeCreation': new FormControl('', [Validators.required]),
            subject: new FormControl('', [Validators.required])
        })
        const $calendar = $('#fullCalendar');
        $calendar.fullCalendar({
            viewRender: function (view: any, element: any) {
                // We make sure that we activate the perfect scrollbar when the view isn't on Month
                if (view.name != 'month') {
                    new PerfectScrollbar($(element).find('.fc-scroller')[0]);
                }
            }, views: {
                month: { // name of view
                    titleFormat: 'MMMM YYYY'
                }, week: {
                    titleFormat: ' MMMM D YYYY'
                }, day: {
                    titleFormat: 'D MMM, YYYY'
                }
            }, select: function (start: any, end: any) {
                // on select we show the Sweet Alert modal with an input
            }, editable: true, eventLimit: true, // allow "more" link when too many events
            eventClick: (event: any) => {
                this.availabilityId = event.id;
                swal.fire({
                    width: '40rem', title: 'demander un rendez vous', html: `
                    <div class="d-flex justify-content-around">
                            <mat-form-field>
    <mat-placeholder>date de render vous</mat-placeholder>
    <mat-datetimepicker-toggle
      [for]="datetimePicker"
      matSuffix
    ></mat-datetimepicker-toggle>
    <mat-datetimepicker
      #datetimePicker
      type="datetime"
      openOnFocus="true"
      timeInterval="5"
    >
    </mat-datetimepicker>
    <input
      matInput
      formControlName="start"
      [matDatetimepicker]="datetimePicker"
      required
      autocomplete="false"
    />
  </mat-form-field>
                          <div class="form-control row">
                          <label class="col-sm-4 col-form-label">le sujet de render vous</label>
                          <div class="col-sm-8">
                          <textarea class="form-control" placeholder="écrire votre sujet ici" rows="4"></textarea>
</div>
                        </div>
                    </div>
                  `, showCancelButton: true, customClass: {
                        confirmButton: 'btn btn-success', cancelButton: 'btn btn-danger',
                    }, buttonsStyling: false
                }).then(function (result: any) {

                    let eventData;
                    const event_title = $('#input-field').val();

                    if (event_title) {
                        eventData = {
                            title: event_title,

                        };
                        console.log(eventData);
                        $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
                    }
                    $calendar.fullCalendar('unselect');
                });
            }, // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
            events: [{
                id: 1,
                title: '',
                start: new Date("2022-01-02 22:01:10"),
                end: new Date("2022-01-02 22:01:25"),
                className: 'event-success'
            }, {
                id: 2,
                title: `<button (click)="console.log(2)">click me</button>`,
                start: new Date("2022-01-02 22:01:10"),
                allDay: false,
                className: 'event-rose'
            }, {
                id: 3,
                title: 'Repeating Event',
                start: new Date("2022-01-02 22:01:10"),
                allDay: false,
                className: 'event-rose'
            }, {
                id: 4, title: 'Meeting', start: new Date("2022-01-02 22:01:10"), allDay: false, className: 'event-green'
            }, {
                id: 5,
                title: 'Lunch',
                start: new Date("2022-01-02 22:01:10"),
                end: new Date("2022-01-02 22:01:10"),
                allDay: false,
                className: 'event-red'
            }, {
                title: 'Md-pro Launch',
                start: new Date("2022-01-02 22:01:10"),
                end: new Date("2022-01-02 22:01:25"),
                allDay: true,
                className: 'event-azure'
            }, {
                title: 'Birthday Party',
                start: new Date("2022-01-02 22:01:10"),
                end: new Date("2022-01-02 22:01:25"),
                allDay: false,
                className: 'event-azure'
            }, {
                title: 'Click for Creative Tim',
                start: new Date("2022-01-02 22:01:10"),
                end: new Date("2022-01-02 22:01:25"),
                url: 'https://www.creative-tim.com/',
                className: 'event-orange'
            }, {
                title: 'Click for Google',
                start: new Date("2022-01-02 22:01:10"),
                end: new Date("2022-01-02 22:01:25"),
                url: 'https://www.creative-tim.com/',
                className: 'event-orange'
            }]
        });
    }
}
