server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/passwordgen.com;

    index index.html;

    server_name passwordgen.com www.passwordgen.com;

    location / {
        try_files $uri $uri/ =404;
    }

    location /api/ {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
 
        proxy_pass http://localhost:5000;
        proxy_redirect off;
    }
}