# Video 
[![Video ](https://img.youtube.com/vi/w_LbFA1_RXg/0.jpg)](https://youtu.be/w_LbFA1_RXg)
# Ubuntu kurulumu
https://www.ubuntu.com/download/server
bu linkten ubuntu server iso dosyasini indirebilirsiniz

# Internete baglanmak icin ayar
`sudo netplan generate`

sonra

`sudo netplan apply`

# Docker kurulumu
[Docker kurulumu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository)

kurulum tamamlandiktan sonra:

`sudo usermod -aG docker $USER`

Bu komutu kullaniyoruz bu komut docker'a sudo olmadan erisebilmemizi sagliyor.Calismasi icin yeniden ssh a girmemiz lazim.

# Portainer kurulumu
[Kurulum](https://www.portainer.io/installation/)

Ilk once curl ile ayarlari indiriyoruz.

` curl -L https://downloads.portainer.io/portainer-agent-stack.yml -o portainer-agent-stack.yml`

Sonrasinda dockerda stacka ekliyoruz.

`docker stack deploy --compose-file=portainer-agent-stack.yml portainer`

Volume olusturuyoruz.

`docker volume create portainer_data`

Docker run ilede 9000 portunda uygulamamizi calistiriyoruz

`docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer`


# Docker build 

`docker build -t nick/uygulamaismi:v1` burda nick , uygulamaismi ve versiyonu degistirmeyi unutmayin

# Scaling

`curl.sh` imizi calistirmadan once unix uyumlu hale getirmemiz lazim

`sed -i -e 's/\r$//' curl.sh`

`./curl.sh` komutunu girerek http isteklerimizden gelen responseyi gorebiliyoruz


> Anlatilan icerikte yanlislik olabilir 1-2 gunluk arastirma sonucu edindigim bilgilere dayanarak video cekmek istedim. Herhangi bir hata varsa bana bildirebilirsiniz

