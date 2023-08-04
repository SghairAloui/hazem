import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import * as SockJs from "sockjs-client";
import * as Stomp from "stompjs";


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }

  public connect() {
    let socket = new SockJs(environment.apiUrl+`api/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }
}
