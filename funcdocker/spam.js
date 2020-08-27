import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  return http.get('http://192.168.178.203/func/api/DockerFunc?name=abc34');
}