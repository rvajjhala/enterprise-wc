import eventsJSON from '../../../assets/data/events.json';
import IdsCalendar from '../ids-calendar';
import IdsCustomCalendarEvent from './custom-calendar-event';
import CustomCalendarEventManager from './custom-calendar-event-manager';

const eventsURL: any = eventsJSON;

/**
 * Fetch events.json
 * @returns {Promise} events.json content
 */
function getCalendarEvents(): Promise<any> {
  return fetch(eventsURL).then((res) => res.json());
}

document.addEventListener('DOMContentLoaded', async () => {
  const calendar: any = document.querySelector<IdsCalendar>('ids-calendar');
  const addEventMenu = document.querySelector('#add-event');
  const eventManager = new CustomCalendarEventManager();
  const view = calendar?.getView();
  calendar?.addEventListener('renderMonthData', () => {
    view.dayCellRenderTemplate = function dayCellRenderTemplate(celltemplate: string,dateKey: string){
      let icon = "";
      if (dateKey == "20190903") {
            icon += `<ids-icon class="icon-spacing" icon="alert-alert" height="12" width="12"></ids-icon>`;
      }
      let stringToSearch = `"day-container">`;
      let index = celltemplate.lastIndexOf(stringToSearch)+stringToSearch.length;
      celltemplate = [celltemplate.slice(0,index),
        `<ids-text
          aria-hidden="true"
          id="icon-text"
          >${icon}</ids-text>`,
      celltemplate.slice(index)].join('');
      return celltemplate;
    }
  });

  calendar?.addEventListener('beforeeventrendered', () => {
    view.generateYOffset = (event: IdsCustomCalendarEvent): number => eventManager.generateYOffset(event);
    view.isEventOverflowing = (event: IdsCustomCalendarEvent): boolean => eventManager.isEventOverflowing(event);
  });

  // Set event types
  calendar.eventTypesData = [
    {
      id: 'dto',
      label: 'Discretionary Time Off',
      translationKey: 'DiscretionaryTimeOff',
      color: 'azure',
      checked: true,
      attrs: [
        'subject',
        'time'
      ]
    },
    {
      id: 'admin',
      label: 'Admin',
      translationKey: 'AdministrativeLeave',
      color: 'amethyst',
      checked: true,
      attrs: [
        'subject',
        'time'
      ]
    },
    {
      id: 'team',
      label: 'Team Event',
      translationKey: 'TeamEvent',
      color: 'emerald',
      checked: true,
      attrs: [
        'subject',
        'time',
        'location'
      ]
    },
    {
      id: 'sick',
      label: 'Sick Time',
      translationKey: 'SickTime',
      color: 'amber',
      checked: true,
      attrs: [
        'subject',
        'time'
      ]
    },
    {
      id: 'holiday',
      label: 'Company Holiday',
      translationKey: 'CompanyHoliday',
      color: 'slate',
      checked: true,
      disabled: true,
      attrs: [
        'subject'
      ]
    }
  ];
  calendar.eventsData = await getCalendarEvents();

  addEventMenu?.addEventListener('selected', (evt: any) => {
    // Mock user defined id
    const id: string = Date.now().toString() + Math.floor(Math.random() * 100);

    switch (evt.detail.value) {
      case 'add-modal':
        calendar.createNewEvent(id, true);
        break;
      case 'add-api':
        calendar.createNewEvent(id, false);
        break;
      case 'clear':
        calendar.clearEvents();
        break;
      default:
        break;
    }
  });
});
