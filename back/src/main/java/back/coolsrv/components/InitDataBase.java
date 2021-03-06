package back.coolsrv.components;

import back.coolsrv.enities.Device;
import back.coolsrv.enities.NAT;
import back.coolsrv.enities.Network;
import back.coolsrv.enities.Vlan;
import back.coolsrv.repositories.DeviceRepository;
import back.coolsrv.repositories.NATRepository;
import back.coolsrv.repositories.NetworkRepository;
import back.coolsrv.repositories.VlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class InitDataBase {
    @Autowired
    DeviceRepository deviceRepository;

    @Autowired
    NATRepository natRepository;

    @Autowired
    NetworkRepository networkRepository;

    @Autowired
    VlanRepository vlanRepository;

    @EventListener(ApplicationReadyEvent.class)
    public void run() throws Exception {
        Network network = new Network("12.12.12.12", "32", "opis", "dns<3", null, false, true, false);
        networkRepository.save(network);
        networkRepository.save(new Network("203.120.0.0", "16", "opis", "dab", null, false, true, false));

        Vlan vlan = new Vlan("vlan", new ArrayList<>(), "desc");
        Device device = new Device("123.45.67.89", "Device1", "opis", "11:11:11:11:11:11", true, "tam");
        NAT nat = new NAT("nazwa", device, "opis", "123.55.55.0", network);
        deviceRepository.save(device);
        natRepository.save(nat);
        vlanRepository.save(vlan);

        deviceRepository.save(new Device("123.45.67.89", "Big server", "opis", "11:11:11:11:11:11", true, "tam"));
    }
}
