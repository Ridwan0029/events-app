import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";

declare let toastr

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let eventt of events" class="col-md-5">
            <event-thumbnail (click)="handleThumbnailClick(eventt.name)" [event]="eventt"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events:any[]
    constructor(private eventService: EventService, private toastr: ToastrService) {
      
    }

    ngOnInit(){
      this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName) {
      this.toastr.successss(eventName)
    }
} 