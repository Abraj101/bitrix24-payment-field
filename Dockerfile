FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy app files
COPY index.html /usr/share/nginx/html/index.html
COPY handler.html /usr/share/nginx/html/handler.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
