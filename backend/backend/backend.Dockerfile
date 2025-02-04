FROM python:3.9.6-buster

WORKDIR /app/
ENV PYTHONPATH=/app/
COPY requirements.txt /app/requirements.txt
RUN apt-get -y update && apt-get -y install curl wget gnupg2 nmap
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r /app/requirements.txt
RUN curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall && \
    chmod +x msfinstall && \
    ./msfinstall
COPY app/ /app/
CMD ["/bin/bash", "-c", "./start.sh"]
