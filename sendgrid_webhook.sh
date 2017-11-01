function localtunnel {
  lt -s s110319022 --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
