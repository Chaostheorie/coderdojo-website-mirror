+++
title = "Workshops"
color = "#fff"
created = 2022-08-27
+++

<script lang="ts">
  import Figure from '$lib/components/Figure.svelte';
</script>

# Luanti II

# Luanti für Weltenverwalter

## Befehle

Mit der Taste F10 (wenn das nicht klappt, versuche FN+F10) kannst du den Chat ein- und ausblenden:

- msg
- grant / revoke
  - fly
  - teleport
  - fast
  - home
  - settime
- teleport
- sethome / home
- time
- kick
- xban

Jeder Befehl muss im Chat mit dem Zeichen '/' am Anfang eingegeben werden.

Ein Bespiel:

```
/help
```

Mit dem Befehl wird dir die Hilfe zu allen aktuell verfügbaren Befehlen angezeigt.

![](https://cyber4edu.org//pads/uploads/01441590-40b8-40fd-9b3a-ca21006cd409.png)

### msg

Mit dem Befehl msg kannst du eine Nachricht an eine andere Person im Spiel senden:

```
/msg KleinerElephant Hallo !
```

### grant / revoke

Für einige Befehle benötigt man als Spielerin Rechte, diese kann der Admin eines Spiels mit dem Befehl grant vergeben:

```
/grant KleinerElephant fly
```

So wird der Spielerin KleinerElephant das Recht fly zugewiesen.

Möchtest du eine weitere Spielerin zum Admin deiner Luanti Welt machen, dann ist das der einfache Weg:

```
/grant KleinerElephant all
```

War das doch keine gute Idee, dann kannst du es so wieder zurück nehmen:

```
/revoke KleinerElephant all
```

Nun hat KleinerElephant allerdings gar keine Rechte mehr.

Du kannst auch einzelne Rechte einer Spielerin wieder weg nehmen:

```
/revoke KleinerElephant fly
```

### teleport

Mit dem Befehl teleport kann man sich selbst an einen anderen Ort im Spiel transportieren.

Für die Angabe des Zielorts gibt es diese Varianten:

```
/teleport x y z
```

Mit dieser Varianten bewegt man sich direkt an den Ort mit der angegebenen Koordinate.

Die Koordinaten in Luanti sind so fest gelegt:

| Achse | Richtung     |
| ----- | ------------ |
| x     | Osten/Westen |
| y     | hoch/runter  |
| z     | Norden/Süden |

Mann kann sich auch relativ zum aktuellen Ort bewegen, so z.B. um 10 Schritte nach oben

```
/teleport ~ ~10 ~
```

So kann man seine aktuell Koordiante ermitteln

```
/teleport ~ ~ ~
```

```
/teleport SpielerinName
```

### sethome / home

Mit dem Befehl sethome speicherst du deinen aktuellen Ort also dein zu Hause. Du kannst nun mit dem Befehl home dort hin springen. Das Recht home ist dafür nötig

```
/sethome
```

```
/home
```

### time

Mit dem Befehl time kann die Spielzeit geändert werden. Dazu ist das Recht 'settime' nötig.

Ein Beipiel:

```
/time 12:00
```

In dem Zusammenhang kann mit der Variablen time_speed eingestellt werden wie lange eine Tag dauert.

Mit dem Wert 0 ändert sich die Zeit im Spiel nicht mehr:

```
/set time_speed 0
```

Der normale Wert ist 72

```
/set time_speed 72
```

24*60=1440
Mochtest du im Spiel Tage von einer Länge von 20 Minuten, dann musst du folgendes rechnen
(24h * 60 Min)/Tagelänge_in_Minuten
also
1440/20=72
1440/4=360
1440/1440=1

Die den beiden Befhlen stellt man die Uhr auf ewig auf 12:00

```
/time 12:00
/set time_speed 0
```

## Die eigene IP

### MacOS/Linux

```Bash
ip addr

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: enp4s0f0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
    link/ether e8:80:88:53:da:d0 brd ff:ff:ff:ff:ff:ff
    altname enxe8808853dad0
3: wlan0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default qlen 1000
    link/ether 22:51:9a:86:44:66 brd ff:ff:ff:ff:ff:ff permaddr 04:7b:cb:29:fa:02
6: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether a0:ce:c8:e4:c2:9f brd ff:ff:ff:ff:ff:ff
    altname enp232s0f3u1u4u1
    altname enxa0cec8e4c29f
    inet 192.168.178.155/24 brd 192.168.178.255 scope global dynamic noprefixroute eth0
       valid_lft 863316sec preferred_lft 863316sec
    inet6 2001:9e8:c14:e400:18e:c547:57b8:d6c4/64 scope global dynamic noprefixroute
       valid_lft 6812sec preferred_lft 3212sec
    inet6 fde7:9c54:f9a1:0:6f6c:a41a:3313:3c01/64 scope global dynamic noprefixroute
       valid_lft 6812sec preferred_lft 3212sec
    inet6 fe80::8094:40d0:ebf3:a011/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

Dieser PC ist aktuell über ein Kabel mit dem Internet verbunden, darum findest du die lokale IP unterhalb des Abschnitts eth0 im Eintrag inet (IPV4):

```
192.168.178.155
```

und unter inet6 (IPV6):

```
2001:9e8:c14:e400:18e:c547:57b8:d6c4
```

Nun hat der PC eine WLAN Verbindung:

```
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: enp4s0f0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
    link/ether e8:80:88:53:da:d0 brd ff:ff:ff:ff:ff:ff
    altname enxe8808853dad0
3: eth0: <BROADCAST,MULTICAST> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
    link/ether a0:ce:c8:e4:c2:9f brd ff:ff:ff:ff:ff:ff
    altname enp232s0f3u1u4u1
    altname enxa0cec8e4c29f
4: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 04:7b:cb:29:fa:02 brd ff:ff:ff:ff:ff:ff
    inet 192.168.178.78/24 brd 192.168.178.255 scope global dynamic noprefixroute wlan0
       valid_lft 863943sec preferred_lft 863943sec
    inet6 fe80::bc54:128d:fbcf:3f65/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

du die lokale IP unterhalb des Abschnitts wlan0 im Eintrag inet (IPV4):

```
192.168.178.78
```

und unter inet6 (IPV6):

```
fe80::bc54:128d:fbcf:3f65
```

### Windows

### Python (alle OS)

```Python
#!/bin/env python3
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("heise.de", 80))
print(f"die IP Adresse deines PC ist {s.getsockname()[0]}")
s.close()
```

Speichere den Code in eine Datei, z.B. getMyIP.py und dann verwende den Code so:

```Bash
python getMyIP.py

die IP Adresse deines PC ist 192.168.178.155
```
